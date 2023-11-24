import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import MyButton from "./MyButton";
import school from "./images/school.png";
import features1 from "./images/Features_Img_1.png";
import features2 from "./images/Features_Img_2.png";
import Grid from "@mui/material/Grid";
import features3 from "./images/Features_Img_3.png";
import features4 from "./images/Features_Img_4.png";
import features5 from "./images/Features_Img_5.png";
import features6 from "./images/Features_Img_6.png";
import features7 from "./images/Features_Img_7.png";
import profile_1 from "./images/profile_1.png";
import profile_2 from "./images/profile_2.png";
import profile_3 from "./images/profile_3.png";
import profile_4 from "./images/profile_4.png";
import Footer from "./Footer";

function Home() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#E8D9D9",
      },
    },
  });

  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      minHeight: "100vh",
    },
    cit: {
      color: "#E8B70E",
    },
    checker: {
      color: "#8A3539",
    },
    heading: {
      fontSize: "4rem", // Adjust the font size as needed
    },
    paragraph: {
      fontSize: "1.5rem",
    },
  };

  const imageStyle = {
    width: "1000px", // Adjust the width of the image
    height: "600px", // Adjust the height of the image
    marginTop: "10px",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div style={styles.root}>
        <h1 style={styles.heading}>
          <span style={styles.cit}>CIT</span>
          <span style={styles.checker}>CHECKER:</span> The ultimate Logging
          <br />
          Platform for Educators
          <br /> and Students
        </h1>
        <p style={styles.paragraph}>
          Empowering educators to effectively manage student attendance, and
          <br /> allowing students to keep track of their attendance
          effortlessly.
        </p>
        <MyButton buttonText="Get Started" size="large" />
        <img src={school} alt="school image" style={imageStyle} />
        <br />
      </div>
      <hr
        style={{
          color: "#ffffff",
          backgroundColor: "#ffffff",
          height: 3,
          width: "80%",
        }}
      />
      <h2
        style={{
          color: "#8A3539",
          fontSize: "2rem",
          marginLeft: "180px",
        }}
      >
        Features
      </h2>
      <hr
        style={{
          color: "#E8B70E",
          backgroundColor: "#E8B70E",
          height: 4,
          width: "5%",
          marginTop: "-30px",
          marginLeft: "220px",
        }}
      />
      <div></div>
      <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={6}>
          <img
            src={features1}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>

        {/* Second column */}
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <h3
                style={{
                  color: "#E8B70E",
                  fontSize: "2rem",
                  marginLeft: "150px",
                }}
              >
                Attendance Tracking
              </h3>
            </Grid>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "-30px",
                  marginRight: "50px",
                }}
              >
                Simplify the attendance process! Teachers
                <br /> can easily mark attendance for their classes,
                <br /> and students get a clear view of their own
                <br /> attendance records. We've made sure it's
                <br /> user-friendly and efficient for a hassle-free experience.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <h3
                style={{
                  color: "#8A3539",
                  fontSize: "2rem",
                  marginLeft: "300px",
                }}
              >
                Attendance Tracking
              </h3>
            </Grid>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "-30px",
                  marginLeft: "200px",
                }}
              >
                Your data's safety is our priority. We've
                <br /> implemented robust security measures,
                <br /> including encryption, regular data backups,
                <br /> and access control mechanisms, to protect
                <br /> sensitive attendance information.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={features2}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={features3}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "50px",
                  marginLeft: "200px",
                }}
              >
                We believe in simplicity. Enjoy an intuitive and
                <br /> easy-to-use interface designed for both
                <br /> students and teachers. Our goal is to make the
                <br /> attendance checking process straightforward
                <br /> and efficient
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "50px",
                  marginLeft: "200px",
                }}
              >
                Stay informed at a glace! A centralized
                <br /> dashboard for both students and teachers,
                <br /> displaying relevant info like attendance
                <br /> statistics, upcoming events, and announcements.
                <br /> Everything you need in one place!
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={features4}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={features5}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "50px",
                  marginLeft: "200px",
                }}
              >
                Retrieve a detailed log of historical
                <br /> attendance to monitor patterns and
                <br /> changes in student attendance over time.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {/* Second column grid with 2 rows */}
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <p
                style={{
                  color: "#8A3539",
                  fontSize: "1.5rem",
                  marginTop: "50px",
                  marginLeft: "200px",
                }}
              >
                Unlock insights! Get in-depth reports and
                <br /> analytics tailored for both students and
                <br /> teachers. Teachers can dive into attendance
                <br /> trends, while students can track their
                <br /> attendance history over time. Knowledge is power!
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={features6}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={features7}
            alt="feature image"
            style={{
              width: "40%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "200px",
            }}
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          minHeight: "30vh",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
          }}
        >
          <span style={styles.cit}>About</span>
          <span style={styles.checker}> Us</span>
        </h1>
        <p style={{ fontSize: "1.5rem", marginTop: "-50px", color: "#8A3539" }}>
          Welcome to CITCHECK we're here to make student attendance easy and
          efficient.
          <br />
          AttendanceChecker is designed to save time for educators and encourage
          students to be
          <br />
          more accountable. We aim to revolutionize attendance management,
          making it
          <br />
          straightforward and accessible. Our goal is to empower educators and
          create a positive
          <br />
          impact ont he learning experience.
          <br />
          <br />
          Join us in aking attendance hassle-free and education more engaging.
          Let's simplify the
          <br />
          way we track attendance together!
        </p>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          minHeight: "10vh",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
          }}
        >
          <span style={styles.cit}>OUR</span>
          <span style={styles.checker}>TEAM</span>
        </h1>
      </div>
      <Grid container spacing={2}>
        {/* First row */}
        <Grid item xs={3}>
          <img
            src={profile_1}
            alt="feature image"
            style={{
              width: "70%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "70px",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src={profile_2}
            alt="feature image"
            style={{
              width: "70%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "70px",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src={profile_3}
            alt="feature image"
            style={{
              width: "70%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "70px",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src={profile_4}
            alt="feature image"
            style={{
              width: "70%", // Adjust the width of the image
              height: "auto", // Adjust the height of the image
              marginTop: "10px",
              marginLeft: "70px",
            }}
          />
        </Grid>

        {/* Second row */}
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "-50px",
            color: "#8A3539",
          }}
        >
          <p>Peter Neil Colico</p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "-50px",
            color: "#8A3539",
          }}
        >
          <p>Chelter Matthew Gilbuena</p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "-50px",
            color: "#8A3539",
          }}
        >
          <p>Darryl Obbus</p>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "-50px",
            color: "#8A3539",
          }}
        >
          <p>Margaus Kylie Cañete</p>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
