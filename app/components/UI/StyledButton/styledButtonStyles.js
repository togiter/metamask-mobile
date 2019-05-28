import { StyleSheet } from 'react-native';
import { colors, fontStyles } from '../../../styles/common';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		borderRadius: 6,
		borderWidth: 2,
		justifyContent: 'center'
	},
	text: {
		fontSize: 14,
		textAlign: 'center',
		...fontStyles.bolder,
		fontWeight: 'bold'
	},
	default: {
		backgroundColor: colors.white,
		borderColor: colors.grey200
	},
	defaultText: {
		color: colors.grey500
	},
	defaultPressed: {
		borderColor: colors.grey500,
		backgroundColor: colors.grey000
	},
	primary: {
		backgroundColor: colors.blue,
		borderColor: colors.blue,
		minHeight: 50
	},
	primaryText: {
		color: colors.white
	},
	primaryPressed: {
		backgroundColor: colors.blue600,
		borderColor: colors.blue600,
		minHeight: 50
	},
	secondary: {
		backgroundColor: colors.white,
		borderColor: colors.blue200
	},
	secondaryText: {
		color: colors.blue
	},
	secondaryPressed: {
		backgroundColor: colors.blue000,
		borderColor: colors.blue
	},
	danger: {
		backgroundColor: colors.red,
		borderColor: colors.red
	},
	dangerText: {
		color: colors.white
	},
	dangerPressed: {
		backgroundColor: colors.red600,
		borderColor: colors.red600
	},
	secondaryDanger: {
		backgroundColor: colors.white,
		borderColor: colors.red200
	},
	secondaryDangerText: {
		color: colors.red
	},
	secondaryDangerPressed: {
		backgroundColor: colors.red000,
		borderColor: colors.red
	},
	warning: {
		backgroundColor: colors.white,
		borderColor: colors.orange200
	},
	warningText: {
		color: colors.orange
	},
	warningPressed: {
		backgroundColor: colors.orange000,
		borderColor: colors.orange
	},
	roundedNormal: {
		backgroundColor: colors.white,
		borderColor: colors.blue,
		padding: 8
	},
	roundedNormalText: {
		color: colors.blue
	},
	normal: {
		backgroundColor: colors.white,
		borderColor: colors.blue200
	},
	normalText: {
		color: colors.blue
	},
	transparent: {
		backgroundColor: colors.transparent,
		borderWidth: 0,
		borderColor: colors.transparent
	},
	neutral: {
		backgroundColor: colors.white,
		borderColor: colors.grey200
	},
	neutralText: {
		color: colors.grey200
	},
	whiteText: {
		...fontStyles.bold,
		color: colors.white
	}
});

function getStyles(type) {
	let fontStyle, containerStyle, containerPressedStyle;
	switch (type) {
		case 'default':
			fontStyle = styles.defaultText;
			containerStyle = styles.default;
			containerPressedStyle = styles.defaultPressed;
			break;
		case 'primary':
			fontStyle = styles.primaryText;
			containerStyle = styles.primary;
			containerPressedStyle = styles.primaryPressed;
			break;
		case 'secondary':
			fontStyle = styles.secondaryText;
			containerStyle = styles.secondary;
			containerPressedStyle = styles.secondaryPressed;
			break;
		case 'danger':
			fontStyle = styles.dangerText;
			containerStyle = styles.danger;
			containerPressedStyle = styles.dangerPressed;
			break;
		case 'secondaryDanger':
			fontStyle = styles.secondaryDangerText;
			containerStyle = styles.secondaryDanger;
			containerPressedStyle = styles.secondaryDangerPressed;
			break;
		case 'warning':
			fontStyle = styles.warningText;
			containerStyle = styles.warning;
			containerPressedStyle = styles.warningPressed;
			break;
		case 'normal':
			fontStyle = styles.normalText;
			containerStyle = styles.normal;
			break;
		case 'rounded-normal':
			fontStyle = styles.roundedNormalText;
			containerStyle = styles.roundedNormal;
			break;
		case 'transparent':
			fontStyle = styles.whiteText;
			containerStyle = styles.transparent;
			break;

		case 'neutral':
			fontStyle = styles.neutralText;
			containerStyle = styles.neutral;
			break;
		default:
			throw new Error('Unknown button type');
	}

	return {
		fontStyle: [styles.text, fontStyle],
		containerStyle: [styles.container, containerStyle],
		containerPressedStyle: [styles.container, containerPressedStyle]
	};
}

export default getStyles;
