import { Card, CardContent, Grid, TextField, Typography,
    Input,
    InputLabel,
    MenuItem,
    Select,
    FormControl, } from '@mui/material'

import { Controller } from 'react-hook-form'

export const BillingForm = ({ control, errors }) => {
  return (
    <>
        <Grid item xs={10} md={6}>
              <Card>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      m={2}
                      align="center"
                      sx={{ borderBottom: "1px solid gray" }}
                    >
                      Billing Details
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="First Name"
                            variant="outlined"
                            error={!!errors.firstName}
                            helperText={
                              errors.firstName && "First name is required"
                            }
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={6}>
                    <CardContent>
                      <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Last Name"
                            variant="outlined"
                            error={!!errors.firstName}
                            helperText={
                              errors.firstName && "Last name is required"
                            }
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="country"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <FormControl
                          variant="outlined"
                          sx={{ width: "95%", ml: "2.5%" }}
                        >
                          <InputLabel id="country-select-label">
                            Country
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="country-select-label"
                            id="country-select"
                            label="Country"
                            error={!!errors.country}
                          >
                            <MenuItem value="CR">Costa Rica</MenuItem>
                            <MenuItem value="BR">Brasil</MenuItem>
                            <MenuItem value="EEUU">Estados Unidos</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="firstAddress"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Street Address"
                            placeholder="House number and street name"
                            variant="outlined"
                            error={!!errors.firstAddress}
                            helperText={
                              errors.firstName && "Street address is required"
                            }
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="secondAddress"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Additonal Address"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            variant="outlined"
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="city"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="City"
                            variant="outlined"
                            error={!!errors.city}
                            helperText={errors.firstName && "City is required"}
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="province"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <FormControl
                          variant="outlined"
                          sx={{ width: "95%", ml: "2.5%" }}
                        >
                          <InputLabel id="province-select-label">
                            Province
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="province-select-label"
                            id="province-select"
                            label="Province"
                            error={!!errors.province}
                          >
                            <MenuItem value="CR">Guanacaste</MenuItem>
                            <MenuItem value="BR">Limón</MenuItem>
                            <MenuItem value="EEUU">San José</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="postcode"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Postcode"
                            variant="outlined"
                            error={!!errors.postcode}
                            helperText={
                              errors.firstName && "Postcode is required"
                            }
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Phone"
                            variant="outlined"
                            error={!!errors.phone}
                            helperText={errors.firstName && "Phone is required"}
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Email address"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={
                              errors.firstName && "Email address is required"
                            }
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ borderBottom: "1px solid gray" }}
                    >
                      Additional information
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Controller
                        name="orderNotes"
                        control={control}
                        defaultValue=""
                        rules={{ required: false }}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...field}
                            label="Order notes (optional)"
                            multiline
                            variant="outlined"
                          />
                        )}
                      />
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
    </>
  )
}
