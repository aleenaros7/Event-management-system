import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const EventDescription = ({ description }) => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Typography
        fontSize="1.3rem"
        variant="h2"
        fontWeight="bold"
        color="primary"
      >
        About This Event
      </Typography>
      <Box
        borderRadius="0.55rem"
        width={isNonMobile ? "90%" : "100%"}
        mt={2}
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.default,
          p: "1rem ",
        }}
      >
        <Typography textAlign="left" fontSize="1rem" color={theme.palette.text.primary}>
          {description}
        </Typography>
      </Box>
    </>
  );
};

export default EventDescription;
