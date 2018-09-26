import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  container: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const options = [ "All", "Films", "People", "Planets", "Species", "Starships", "Vehicles"];

class OutlinedTextFields extends React.Component {

  state = {
    selectedOption : "All",
    searchField : ""
  };

  handleDropdownChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  handleSearchFieldChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  handleSearchButtonClick = () => {
    const { onSearchButtonClick } = this.props;
    const { selectedOption,searchField } = this.state;
    onSearchButtonClick(selectedOption.toLowerCase(),searchField);
  }

  render() {

    const { classes, onRandomButtonClick } = this.props;

    return (


      <div>

        <form className={classes.container} noValidate autoComplete="off">
    
          <TextField
            id="outlined-select"
            select
            label="Select"
            value={this.state.selectedOption}
            className={classes.textField}
            onChange={this.handleDropdownChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="What do you want to search about today ?"
            margin="normal"
            variant="outlined"
          >
            {options.map((option,index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleSearchFieldChange}
          />

        </form>

        <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.handleSearchButtonClick}>
          <SearchIcon />
        </Button>

        <Button variant="outlined" color="secondary" className={classes.button} onClick={onRandomButtonClick}>
          Random Fact
        </Button>

      </div>


    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);