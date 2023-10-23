import {
    Button,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Controller, useForm } from "react-hook-form";
  import axios from "axios";
  import Swal from "sweetalert2";
  import { ContactSupport } from "@mui/icons-material";
  
  export const ContactForm = () => {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
  
    const [isSending, setIsSending] = useState(false);
  
    const onSubmit = (data) => {
      setIsSending(true);
  
      axios
        .post("https://amusing-green-crabapple.glitch.me/email", data)
        .then((response) => {
          console.log(response);
          setIsSending(false);
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Su mensaje ha sido enviado con éxito.",
          });
        })
        .catch((error) => {
          console.error(error);
          setIsSending(false);
          Swal.fire({
            icon: "error",
            title: "¡Error al enviar el mensaje!",
            text: "Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
            footer:
              '<a href="https://api.whatsapp.com/send?phone=50672206552" target={"__blank"}>¿Necesitas ayuda? Contáctanos por WhatsApp</a>',
          });
        });
    };
  
    return (
      <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" m={2}>
            Formulario de Contacto
          </Typography>
        </Grid>
  
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "5%",
          }}
        >
          <ContactSupport sx={{ fontSize: "100px" }} />
          <Typography variant="h4" color={"#486284"}>
            Contáctenos
          </Typography>
          <Typography align="center">Estamos para servirle</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={1}
              mt={2}
              mb={2}
              sx={{ width: "100%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item sx={{ width: "70%" }}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      fullWidth
                      {...field}
                      label="Nombre"
                      variant="filled"
                      error={!!errors.name}
                      helperText={errors.name && "Por favor digite su nombre"}
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ width: "70%" }}>
                <Controller
                  name="number"
                  control={control}
                  defaultValue=""
                  rules={{ required: false }}
                  render={({ field }) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      fullWidth
                      type={"number"}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      {...field}
                      label="Teléfono"
                      variant="filled"
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ width: "70%" }}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      fullWidth
                      {...field}
                      label="Correo Electrónico"
                      variant="filled"
                      error={!!errors.email}
                      helperText={
                        errors.email && "Correo electronico es requerido"
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ width: "70%" }}>
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      fullWidth
                      {...field}
                      label="Asunto"
                      variant="filled"
                      error={!!errors.subject}
                      helperText={errors.subject && "Escriba su solicitud"}
                    />
                  )}
                />
              </Grid>
              <Grid item sx={{ width: "70%" }}>
                <Controller
                  name="text"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      sx={{ backgroundColor: "#fff" }}
                      multiline
                      fullWidth
                      {...field}
                      label="Mensaje"
                      variant="filled"
                      error={!!errors.message}
                      helperText={errors.message && "Escriba su mensaje"}
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="submit"
                  disabled={isSending}
                  sx={{
                    width: "50%",
                    backgroundColor: "#486284",
                    mt: "2%",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#fff", color: "#486284" },
                    ":disabled": {
                      backgroundColor: "#486284",
                      color: "#fff",
                      opacity: 0.5,
                    },
                  }}
                >
                  {isSending ? "Enviando..." : "Enviar"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  };
  