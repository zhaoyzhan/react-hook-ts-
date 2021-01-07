import Qs from 'qs';

// formData
const setFormDataParams = (data: any) => {
    const fd = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (key.endsWith('[]')) {
                data[key].forEach((item: any) => {
                    fd.append(key, item)
                })
            } else {
                fd.append(key, data[key])
            }
        }
    }
    return fd;
}
// 设置request.headers['Content-Type']
export const setContentType = (contentType: string) => {
    switch (contentType) {
        case "_json":
            return "application/json";
        case "_file":
            return "multipart/form-data";
        default:
            return "application/x-www-form-urlencoded";
    }
}
// formData
export const setFormatData = (contentType: string, data: any) => {
    switch (contentType) {
        case "multipart/form-data":
            return setFormDataParams(data);
        case "application/x-www-form-urlencoded":
            return Qs.stringify(data);
        default:
            return data;
    }
}

