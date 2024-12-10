import {
    Card,
    CardContent,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
  import { Settings } from "@mui/icons-material";
  import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    red,
    deepOrange,
    indigo,
    blueGrey,
    blue,
    pink,
    green,
    teal,
  } from "@mui/material/colors";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useState } from "react";
export default function CardSettings(){
    const { setColor, setImage } = useStateContext();
    const [userProfile, setUserProfile] = useState(false);
    useEffect(() => {
      const handleOutsideClick = (event) => {
        // Check if the click is outside the card
        if (
          userProfile &&
          !document.getElementById("tool-container").contains(event.target)
        ) {
          setUserProfile(false);
        }
      };
  
      // Attach the event listener to the document body
      document.body.addEventListener("click", handleOutsideClick);
  
      // Cleanup the event listener on component unmount
      return () => {
        document.body.removeEventListener("click", handleOutsideClick);
      };
    }, [userProfile]);
    const handleButtonClick = () => {
      // Toggle the card visibility when the button is clicked
      setUserProfile(!userProfile);
    };
return(
    <div id="tool-container">
          <IconButton
            onClick={handleButtonClick}
            style={{
              position: "absolute",
              bottom: "50%",
              right: 20,
              zIndex: 1000,
            }}
            size="large"
          >
            <Settings fontSize="inherit" />
          </IconButton>
          {userProfile ? (
            <Card
              style={{
                minWidth: 275,
                backdropFilter: "blur(3px)",
                backgroundColor: "rgba(255,255,255,0)",
                height: 280,
                position: "absolute",
                top: "37%",
                right: 75,
                zIndex: 10,
                paddingTop: "10px",
                borderRadius: "10px",
              }}
            >
              <IconButton
                style={{ position: "absolute", right: 8, top: 0 }}
                color="error"
                onClick={() => {
                  setUserProfile(false);
                }}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </IconButton>
              <CardContent
                style={{ display: "grid", gap: 10, marginTop: "8px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="body2"
                    fontSize={14}
                    fontWeight={600}
                    color={"#20466c"}
                  >
                    SIDEBAR FILTERS
                  </Typography>
                </div>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "1px solid #ddd",
                    height: "30px",
                  }}
                >
                  <span
                    onClick={() => setColor(teal[300])}
                    style={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      outline: "1.5px solid" + `${blue[500]}`,
                      backgroundColor: teal[300],
                    }}
                  ></span>
                  <span
                    onClick={() => setColor(blue[100])}
                    style={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      outline: "1.5px solid" + `${blue[500]}`,
                      backgroundColor: blue[100],
                    }}
                  ></span>
                  <span
                    onClick={() => setColor(indigo[100])}
                    style={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      outline: "1.5px solid" + `${blue[500]}`,
                      backgroundColor: indigo[100],
                    }}
                  ></span>
                  <span
                    onClick={() => setColor(blueGrey[100])}
                    style={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      outline: "1.5px solid" + `${blue[500]}`,
                      backgroundColor: blueGrey[100],
                    }}
                  ></span>
                </Stack>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="body2"
                    fontSize={14}
                    fontWeight={600}
                    color={"#20466c"}
                  >
                    IMAGES
                  </Typography>
                </div>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "1px solid #ddd",
                    height: "30px",
                  }}
                >
                  <span
                    onClick={() =>
                      setImage(
                        "https://demos.creative-tim.com/material-dashboard-material-ui-v4/static/media/sidebar-4.dd4b5581.jpg"
                      )
                    }
                    style={{
                      cursor: "pointer",
                      height: "100px",
                      width: "50px",
                      borderRadius: "10px",
                      backgroundImage:
                        "url(https://demos.creative-tim.com/material-dashboard-material-ui-v4/static/media/sidebar-4.dd4b5581.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                  <span
                    onClick={() =>
                      setImage(
                        "https://demos.creative-tim.com/material-dashboard-material-ui-v4/static/media/sidebar-3.e667b13e.jpg"
                      )
                    }
                    style={{
                      cursor: "pointer",
                      height: "100px",
                      width: "50px",
                      borderRadius: "10px",
                      backgroundImage:
                        "url(https://demos.creative-tim.com/material-dashboard-material-ui-v4/static/media/sidebar-3.e667b13e.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                  <span
                    onClick={() =>
                      setImage(
                        "https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/sidebar-1.d4b3c417.jpg"
                      )
                    }
                    style={{
                      cursor: "pointer",
                      height: "100px",
                      width: "50px",
                      borderRadius: "10px",
                      backgroundImage:
                        "url(https://demos.creative-tim.com/material-dashboard-pro-material-ui-v4/static/media/sidebar-1.d4b3c417.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                  <span
                    onClick={() =>
                      setImage(
                        "https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/sidebar-5.jpg"
                      )
                    }
                    style={{
                      cursor: "pointer",
                      height: "100px",
                      width: "50px",
                      borderRadius: "10px",
                      backgroundImage:
                        "url(https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/sidebar-5.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></span>
                </Stack>
              </CardContent>
            </Card>
          ) : (
            <></>
          )}
        </div>
)
}