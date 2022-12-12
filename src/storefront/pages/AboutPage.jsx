import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { Footer } from "../components/footer";
import { Header } from "../layout";
export const AboutPage = () => {
  return (
    <Box>
      <Header
        title={"Crochet Pinturas y más"}
        subtitle={"Todo lo que más deseas"}
      />

      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pr: {xs: '50px', md: '100px'}, pl: {xs: '50px', md: '100px'}, mb: '50px'}}>
        <Typography variant="h3" color={'#7B7D7D'} >Nuestra historia</Typography>
        <CardMedia
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/Gemelas%2FNuestra_Historia21.jpeg?alt=media&token=1bab4b83-da46-4fa0-8b8f-4677c6ea2454"
          alt="green iguana"
          sx={{ mb: "30px", mt: '30px', width: "30%" }}
        />
        <Typography variant="h6" sx={{mb: '20px'}}>Comienzos</Typography>
        <Typography textAlign={'center'}>
          Nosotras somos Costarricenses, siempre nos gustó .........¿Cómo
          podemos ganarnos un buen nombre y el respeto de los demás? Piense, por
          ejemplo, en lo que menciona el Salmo 15. En respuesta a la pregunta:
          “¿Quién será huésped en tu tienda [la de Dios]?”, el salmista
          escribió: “El que está [...] practicando la justicia y hablando la
          verdad en su corazón. No ha calumniado [...]. A su compañero no ha
          hecho nada malo, y ningún oprobio ha repetido contra su conocido
          íntimo. A sus ojos el despreciable ciertamente es rechazado [...]. Ha
          jurado a lo que es malo para sí, y no obstante no lo altera [...] ni
          ha tomado un soborno” (Salmo 15:1-5). ¿Quién no respetaría a alguien
          que viviera en armonía con estos principios?
        </Typography>
        <Typography variant="h6" sx={{mb: '20px', mt: '20px'}}>Qué hacemos</Typography>
        <Typography textAlign={'center'}>
          Nosotras somos Costarricenses, siempre nos gustó .........¿Cómo
          podemos ganarnos un buen nombre y el respeto de los demás? Piense, por
          ejemplo, en lo que menciona el Salmo 15. En respuesta a la pregunta:
          “¿Quién será huésped en tu tienda [la de Dios]?”, el salmista
          escribió: “El que está [...] practicando la justicia y hablando la
          verdad en su corazón. No ha calumniado [...]. A su compañero no ha
          hecho nada malo, y ningún oprobio ha repetido contra su conocido
          íntimo. A sus ojos el despreciable ciertamente es rechazado [...]. Ha
          jurado a lo que es malo para sí, y no obstante no lo altera [...] ni
          ha tomado un soborno” (Salmo 15:1-5). ¿Quién no respetaría a alguien
          que viviera en armonía con estos principios?
        </Typography>
        <Typography variant="h6" sx={{mb: '20px', mt: '20px'}}>Nuestro Equipo</Typography>
        <Typography textAlign={'center'}>
          Nosotras somos Costarricenses, siempre nos gustó .........¿Cómo
          podemos ganarnos un buen nombre y el respeto de los demás? Piense, por
          ejemplo, en lo que menciona el Salmo 15. En respuesta a la pregunta:
          “¿Quién será huésped en tu tienda [la de Dios]?”, el salmista
          escribió: “El que está [...] practicando la justicia y hablando la
          verdad en su corazón. No ha calumniado [...]. A su compañero no ha
          hecho nada malo, y ningún oprobio ha repetido contra su conocido
          íntimo. A sus ojos el despreciable ciertamente es rechazado [...]. Ha
          jurado a lo que es malo para sí, y no obstante no lo altera [...] ni
          ha tomado un soborno” (Salmo 15:1-5). ¿Quién no respetaría a alguien
          que viviera en armonía con estos principios?
        </Typography>
      </Grid>

      <Footer />
    </Box>
  );
};
