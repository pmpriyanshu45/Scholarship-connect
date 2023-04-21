import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
// import AdbIcon from '@mui/icons-material/Adb';
const Home = () => {
    const navigate = useNavigate();
const pages = ['Home', 'Add Scholarship', 'Feedback'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleLogout =()=>{
    localStorage.removeItem('LoginId');
    navigate('/')
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        <>
            {/* <!-- top-header --> */}

            {/* <!-- header --> */}

            

            <div id="header">
                <div className="img-logo">
                    <img className="logo" src="https://logopeople.in/wp-content/uploads/2013/01/government-of-india-1.jpg"
                        alt="indian Government log" />
                    <div className="header-content">
                        <h6>
                             सूचना विज्ञान केन्द्र<br /> Informatics Centre
                        </h6>
                    </div>

                    <div className="heading-block">
                        <h4 className="heading" style={{marginLeft:'60px'}}>Scholar Connect</h4>
                        <h6 className="heading-content">Ministry of Electronics & Information Technology, Government of India<br />
                            <span className="color">(For Academic Year 2022-23)</span>
                        </h6>
                    </div>
                    <img className="logo1"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
                        alt="logo"/>
                </div>
            </div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src={require('../logo.jpg')} width={'8%'} style={{borderRadius:'10px'}} alt="indian Government log"></img>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml:2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
            //   letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Scholar Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontFamily={'serif'} fontSize={'20px'}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=>navigate('/AddScholarship')}
              >
                Add Scholarship
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=>navigate('/Feedback')}
              >
                Feedback
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </MenuItem> 
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
            {/* <!-- image and infomation --> */}

            <div className="info-main justify-content text-center">
                <h6 className="info">Please check the Announcement corner regularly for latest updates and information.
                    For any technical queries, please contact<br /> <span className="info-part justify-content text-center">
                        from 8 AM to 8 PM on all days, excluding holidays</span> </h6>
            </div>

            <img className="img1" src="https://scholarships.gov.in/public/Content/img/pariksha_pe_charcha_eng.jpg" alt="" />



            <ul>

                <li><h4 className="table-heading mx-3 my-5">NATIONAL SCHOLARSHIP FOR MINORITY</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Pre Matric Scholarships Scheme for Minorities</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post Matric Scholarships Scheme for Minorities</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Merit Cum Means Scholarship For Professional and Technical Courses CS</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success">Apply</a></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>BEGUM HAZRAT MAHAL NATIONAL SCHOLARSHIP</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success">Apply</a></td>
                        </tr>

                    </tbody>
                </table>


                <li><h4 className="table-heading mx-3 my-5"> NATIONAL SCHOLARSHIP FOR PERSON WITH DISABILITIES</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Pre-matric Scholarship for Students with Disabilities</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success ">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post-matric Scholarship for Students with Disabilities</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success ">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Scholarships for Top Class Education for students with disabilities.</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://scholarships.gov.in/" className="btn btn-success ">Apply</a></td>
                        </tr>

                    </tbody>
                </table>

                <li><h4 className="table-heading mx-3 my-5">STATE SCHOLARSHIP FOR M.P STUDENT</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th scope="row">1</th>
                            <td>Mukhya Mantri Jan Kalyan (Shiksha Protsahan Yojna)</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><a href="https://www.scholarshipportal.mp.nic.in/Public/Student_Search.aspx" className="btn btn-success">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post-matric Scholarship Scheme (OBC Students)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://www.scholarshipportal.mp.nic.in/Public/Student_Search.aspx" className="btn btn-success ">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Post-matric Scholarship Scheme (SC / ST Student)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://www.scholarshipportal.mp.nic.in/Public/Student_Search.aspx" className="btn btn-success ">Apply</a></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Mukhya Mantri Medhavi Vidhyarti (MMVY) Yojna (MMVY)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://www.scholarshipportal.mp.nic.in/Public/Student_Search.aspx" className="btn btn-success ">Apply</a></td>
                        </tr>

                    </tbody>
                </table>
                <li><h4 className="table-heading mx-3 my-5">PRIVATE SCHOLARSHIP FOR STUDENTS</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th scope="row">1</th>
                            <td>Reliance Foundation Scholarship</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><a href="https://scholarships.reliancefoundation.org/PG_Scholarship.aspx" className="btn btn-success">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>IET India Scholarship</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><a href="https://scholarships.theietevents.com/#!" className="btn btn-success ">Apply</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Keep India Smiling Foundation Scholarship</td>
                            <td>Closed on 30-06-2023</td>
                            <td>Closed on 15-07-2023</td>
                            <td><a href="https://www.colgate.com/en-in/smile-karo-aur-shuru-ho-jao/foundation-scholarship" className="btn btn-success ">Apply</a></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Dell Scholars program</td>
                            <td>Closed on 01-12-2023</td>
                            <td>Closed on 15-12-2023</td>
                            <td><a href="https://www.dellscholars.org/scholarship/" className="btn btn-success ">Apply</a></td>
                        </tr>

                    </tbody>
                </table>

            </ul>

            {/* FOOTER */}


            <footer className="page-footer font-small special-color-dark pt-4">


                <div className="container">

                    <div className="row">


                        <div className="col-md-6 mb-4">


                        </div>

                        <div className="col-md-6 mb-4">

        

                        </div>


                    </div>


                </div>

                <h6 className="justify-content text-center">This site is designed, developed and hosted by Team Thunder ,
                    content provided by Scholar Connect.</h6>
                    <p className="justify-content text-center my-3">Last Updated on 12th Apr 2023</p>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <img className="footer-img1" src="https://presentations.gov.in/wp-content/uploads/2020/06/2.png?x19336" alt="" />
                    <img className="footer-img2" src="https://presentations.gov.in/presgov_new/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-sans-01.jpg?x91911" alt="" />
                </div>


            </footer>




        </>
    )
}

export default Home;