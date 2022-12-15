import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteOutline,
  ImageOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from "../../hooks/useForm";
// import { ImageGallery } from "../components";
import {
  setActiveProduct,
  startDeletingProduct,
  startSaveProduct,
  startUploadingFiles,
  //   startUploadingFiles,
} from "../../store/dashboard";
import { useRef } from "react";
import { ProductList } from "../components";
import { useState } from "react";

const group = [
  {
    label: "Desarrollo Web",
    value: "web development",
  },
  {
    label: "Diseño Gráfico",
    value: "graphic design",
  },
  {
    label: "Edición de Video",
    value: "video editing",
  },
];

// const desarrollo = materias.filter( materias => materias.title === "desarrollo");
// const ciencia = materias.filter( materias => materias.title === "ciencia");

export const ProductView = () => {
  const dispatch = useDispatch();

  const [ files, setFiles ] = useState(null);

  const {
    active: product,
    messageSaved,
    isSaving,
  
  } = useSelector((state) => state.dashboard);

  const {
    title,
    description,
    shortDescription,
    available,
    tags,
    category,
    color,
    price,
    date,
    onInputChange,
    formState,
  } = useForm(product);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveProduct(formState));

    return;
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
    setActiveProduct;
  }, [messageSaved]);

  const onSaveProduct = (e) => {
    e.preventDefault();
    dispatch(startSaveProduct());
  };

  const fileInputRef = useRef();

  console.log(product.id);

  const onInputFileChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files, product.id));
  };

  const onDelete = () => {
    dispatch(startDeletingProduct());
  };

  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__slow"
        container
        spacing={0}
        sx={{
          height: "100vh",
          backgroundColor: "#fff",
          borderRadius: 3,
        }}
      >
        <Grid item md={4} sx={{display: {xs: 'none', md: 'block'}}}>
          <ProductList />
        </Grid>
        <Grid item xs={12} md={8} sx={{p: '25px', backgroundColor: 'dashboard.background'}}>
          <Grid item>
            <Typography align="center" fontWeight="light">
              {dateString}
            </Typography>
          </Grid>
          <Grid item>
            <input
              type="file"
              ref={fileInputRef}
              multiple
              onChange={onInputFileChange}
              // onChange={e => setFiles(e.target.files[0])}
              style={{ display: "none" }}
            />
            <IconButton
              color="primary"
              disabled={isSaving}
              onClick={() => fileInputRef.current.click()}
            >
              <ImageOutlined />
            </IconButton>
            <Button
              disabled={isSaving}
              onClick={onSaveProduct}
              color="primary"
              sx={{ padding: 2 }}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>
          </Grid>
          <Grid container>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese el nombre de Producto"
              label="Nombre del producto"
              sx={{ border: "none", mb: 1 }}
              name="title"
              value={title}
              onChange={onInputChange}
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              label="Descripción"
              minRows={5}
              sx={{ border: "none", mb: 1 }}
              name="description"
              value={description}
              onChange={onInputChange}
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              label="Descripción Corta"
              minRows={5}
              sx={{ border: "none", mb: 1 }}
              name="shortDescription"
              value={shortDescription}
              onChange={onInputChange}
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              label="Etiquetas"
              sx={{ border: "none", mb: 1 }}
              name="tags"
              value={tags}
              onChange={onInputChange}
            />
            <TextField
              select
              label="Categoría"
              value={category}
              fullWidth
              name="category"
              onChange={onInputChange}
              helperText="Escoja la categoría"
              variant="filled"
            >
              {group.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              label="Color"
              sx={{ border: "none", mb: 1 }}
              name="color"
              value={color}
              onChange={onInputChange}
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              label="Precio"
              sx={{ border: "none", mb: 1 }}
              name="price"
              value={price}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container justifyContent="end">
            <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
              <DeleteOutline />
              Borrar
            </Button>
          </Grid>
          {/* <ImageGallery images={ note.imageUrls } /> */}
        </Grid>
      </Grid>
    </>
  );
};
