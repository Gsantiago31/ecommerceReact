import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ArrowLeftSharp,
  DeleteOutline,
  ImageOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from "../../hooks/useForm";
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

import ReactLoading from "react-loading";

const group = [
  {
    label: "Amigurumi",
    value: "amigurumi",
  },
  {
    label: "Pintura",
    value: "pintura",
  },
  {
    label: "Macrame",
    value: "macrame",
  },
];

const groupSize = [
  {
    label: "Pequeño",
    value: "pequeño",
  },
  {
    label: "Mediano",
    value: "mediano",
  },
  {
    label: "Grande",
    value: "grande",
  },
];

export const ProductView = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const {
    active: product,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.dashboard);

  const {
    title,
    description,
    shortDescription,
    tags,
    category,
    color,
    price,
    date,
    size,
    quantity,
    weight,
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
    dispatch(startSaveProduct(formState));
  };

  const fileInputRef = useRef();

  const onInputFileChange = async ({ target }) => {
    if (target.files === 0) return;

    setIsLoading(true); // Establecer isLoading en true

    try {
      await dispatch(startUploadingFiles(target.files, product.id));
    } catch (error) {
      setIsLoading(false); // Establecer isLoading en false

      // Mostrar una alerta de SweetAlert en caso de error
      Swal.fire({
        icon: "error",
        title: "Error al cargar los archivos",
        text: "No se pudieron cargar los archivos. Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsLoading(false); // Establecer isLoading en false
    }
  };

  const onDelete = () => {
    dispatch(startDeletingProduct());
  };

  const returnProductList = () => {
    dispatch(setActiveProduct(""));
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
        <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <ProductList />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ p: "25px", backgroundColor: "dashboard.background" }}
        >
          <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
            <IconButton onClick={returnProductList}>
              <ArrowLeftSharp />
            </IconButton>

            <Typography align="center" fontWeight="light">
              {dateString}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {isLoading && (
              <ReactLoading
                type={"spin"}
                color={"#e30052"}
                height={"5%"}
                width={"5%"}
              />
            )}
            <input
              type="file"
              ref={fileInputRef}
              multiple
              onChange={onInputFileChange}
              style={{ display: "none" }}
            />
            <Button
              color="primary"
              disabled={isSaving}
              onClick={() => fileInputRef.current.click()}
            >
              <ImageOutlined />
            </Button>
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
              select
              label="Tamaño"
              value={size}
              fullWidth
              name="size"
              onChange={onInputChange}
              helperText="Escoja el tamaño"
              variant="filled"
            >
              {groupSize.map((option) => (
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
            <TextField
              type="number"
              variant="filled"
              fullWidth
              label="Cantidad"
              sx={{ border: "none", mb: 1 }}
              name="quantity"
              value={quantity}
              onChange={onInputChange}
              inputProps={{
                min: 0, // Valor mínimo permitido
                inputMode: "numeric", // Configuración para mostrar el teclado numérico en dispositivos móviles
                pattern: "[0-9]*", // Restringe la entrada a solo números en computadoras
                title: "Solo se permiten números", // Mensaje de validación en hover
              }}
            />
            <TextField
              type="number"
              variant="filled"
              fullWidth
              label="Peso"
              sx={{ border: "none", mb: 1 }}
              name="weight"
              value={weight}
              onChange={onInputChange}
              inputProps={{
                min: 1, // Valor mínimo permitido
                inputMode: "numeric", // Configuración para mostrar el teclado numérico en dispositivos móviles
                pattern: "[1-9]*", // Restringe la entrada a solo números en computadoras
                title: "Solo se permiten números", // Mensaje de validación en hover
              }}
            />
          </Grid>

          <Grid container justifyContent="start">
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
