import { Platform } from 'react-native';
/**
 * เก็บ ฟอนต์
 */
export default {
    regular: 'Mali-Regular',
    bold: Platform.OS === 'ios' ? 'Mali-Medium' : 'Mali-Medium'
}