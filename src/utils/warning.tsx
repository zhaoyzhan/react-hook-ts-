
import {message} from 'antd';
export const warning = (msg: string): void => {
    message.destroy();
    message.warning(msg);
} 