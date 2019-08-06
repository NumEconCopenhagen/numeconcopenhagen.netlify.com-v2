import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { AppBar, CssBaseline, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Icon } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby';
import Wrapper from './Wrapper.jsx'

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#901A1E',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
    },
    typography: {
        h1: {
            fontSize: '3rem',
            paddingBottom: '8px'
        },
        h2: {
            fontSize: '2.5rem',
            paddingBottom: '6px'
        },
        h3: {
            fontSize: '2rem',
            paddingBottom: '4px'
        },
        body1: {
            fontSize: '1rem'
        }
    }
});
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        maxWidth: '1400px',
    },
    toolbar: theme.mixins.toolbar,
});

function Header(props) {
    const { classes, children } = props;
    const query = graphql`
    query {
        allFile(filter: {relativePath: {eq: "config.yml"}, sourceInstanceName: {eq: "content"}}) {
          edges {
            node {
              childContentYaml {
                urls {
                  icon
                  title
                  url
                  weight
                }
                title
              }
            }
          }
        }
      }
    `
    return (
        <Wrapper>
            <StaticQuery query={query} render={data => (
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="fixed" className={classes.appBar} style={{ marginTop: "0px", marginBottom: "0px" }}>
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap style={{ fontFamily: 'VT323', fontSize: '32px' }}>
                                    <Link color='inherit' underline='none' href='/'>{data.allFile.edges[0].node.childContentYaml.title}</Link>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.toolbar} />
                            <List>
                                {data.allFile.edges[0].node.childContentYaml.urls.map((x) => (
                                    <ListItem button component="a" href={x.url} key={x.weight}>
                                        <ListItemIcon>
                                            <Icon>
                                                {x.icon}
                                            </Icon>
                                        </ListItemIcon>
                                        <ListItemText>
                                            {x.title}
                                        </ListItemText>
                                    </ListItem>

                                ))}
                            </List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            {children}
                        </main>
                    </div>
                </MuiThemeProvider>)
            }
            />
        </Wrapper>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);