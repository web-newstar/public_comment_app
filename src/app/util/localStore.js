export default {
    getItem : (key) => {
        var value;
        try {
            value = localStorage.getItem(key);
        } catch (er) {
            // if (__DEV__) {
            //     console.error('localStorage报错' + er.message)localStore.getItem();

            // }
            console.error('localStorage报错' + er.message)
            
        } finally {
            return value;
        }
    },
    setItem : (key, value) => {
        try {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value)
        } catch (er) {
            // 开发环境下提示 error
            // if (__DEV__) {
            //     console.error('localStorage报错' + er.message)
            // }
            console.error('localStorage报错' + er.message);
            
        }
    }
}