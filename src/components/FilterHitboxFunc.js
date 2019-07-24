import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';

import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

//https://github.com/JedWatson/react-select

const suggestions = [
    { label: 'All' },
    { label: 'Octane' },
    { label: 'Dominus' },
    { label: 'Plank' },
    { label: 'Hybrid' },
    { label: 'Breakout' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

/**** start styling ****/
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 'auto',
        zIndex: '100',
    },
    input: {
        display: 'flex',
        padding: 1,
        width: '25rem', //WIDTH
        height: 'auto',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: theme.spacing(1, 2),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
}));
/**** end styling ****/

function FilterHitboxFunc ({ selectedHitbox, onSelectedHitboxChange }) {
    const [selectedOption , setSelectedOption ] = useState(null);

    const handleHitboxChange = selectedOption   => {
        setSelectedOption(selectedOption);
        onSelectedHitboxChange(selectedOption.value);
        console.log(selectedOption.value);
    };

    /**** start styling ****/
    const classes = useStyles();
    const theme = useTheme();

    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    };
    /**** end styling ****/

    /**** start Menuitem/Option syling ****/
    function Option(props) {
        return (
            <MenuItem
                ref={props.innerRef}
                selected={props.isFocused}
                component="div"
                style={{
                    fontWeight: props.isSelected ? 700 : 400,
                }}
                {...props.innerProps}
            >
                {props.children}
            </MenuItem>
        );
    }
    /**** end Menuitem/Option syling ****/

    /**** start Placeholder ****/
    function Placeholder(props) {
        const { selectProps, innerProps = {}, children } = props;
        return (
            <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
                {children}
            </Typography>
        );
    }
    /**** end Placeholder ****/

    /**** start SingleValue ****/
    function SingleValue(props) {
        return (
            <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
                {props.children}
            </Typography>
        );
    }
    /**** end SingleValue ****/

    /**** start ValueContainer (what appears in the box after selecting) ****/
    function ValueContainer(props) {
        return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
    }
    /**** end ValueContainer ****/

    /**** start NoOptionsMessage ****/
    function NoOptionsMessage(props) {
        return (
            <Typography
                color="textSecondary"
                className={props.selectProps.classes.noOptionsMessage}
                {...props.innerProps}
            >
                {props.children}
            </Typography>
        );
    }
    /**** end NoOptionsMessage ****/

    /**** start  ****/
    function inputComponent({ inputRef, ...props }) {
        return <div ref={inputRef} {...props} />;
    }
    /**** end  ****/

    /**** start Control (for the attribute label) ****/
    function Control(props) {
        const {
            children,
            innerProps,
            innerRef,
            selectProps: { classes, TextFieldProps },
        } = props;

        return (
            <TextField
                fullWidth
                InputProps={{
                    inputComponent,
                    inputProps: {
                        className: classes.input,
                        ref: innerRef,
                        children,
                        ...innerProps,
                    },
                }}
                {...TextFieldProps}
            />
        );
    }
    /**** end Control ****/

    /**** start MultiValue (for multiple selects) ****/
    function MultiValue(props) {
        return (
            <Chip
                tabIndex={-1}
                label={props.children}
                className={clsx(props.selectProps.classes.chip, {
                    [props.selectProps.classes.chipFocused]: props.isFocused,
                })}
                onDelete={props.removeProps.onClick}
                deleteIcon={<CancelIcon {...props.removeProps} />}
            />
        );
    }
    /**** end MultiValue ****/

    /**** start  ****/

    /**** end  ****/

    /**** start Menu ****/
    function Menu(props) {
        return (
            <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
                {props.children}
            </Paper>
        );
    }
    /**** end Menu ****/

    /**** start Components ****/
    const components = {
        Option,
        Placeholder,
        SingleValue,
        ValueContainer,
        NoOptionsMessage,
        inputComponent,
        Control,
        MultiValue,
        Menu,
    };
    /**** end Components ****/

    return (
        <div>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    inputId="react-select-multiple"
                    TextFieldProps={{
                        label: 'Hitbox',
                        InputLabelProps: {
                            htmlFor: 'react-select-multiple',
                            shrink: true,
                        },
                    }}
                    placeholder="Select Hitbox(s)"
                    options={suggestions}
                    components={components}
                    value={selectedOption }
                    onChange={handleHitboxChange}

                />
        </div>
    );

}

export default FilterHitboxFunc;


