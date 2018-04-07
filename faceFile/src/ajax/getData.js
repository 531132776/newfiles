import ElementUI from 'element-ui';
export default function(url, data = {}) {
    return axios.post(
        url,
        data
    ).then(function(data) {
        return Promise.resolve(data);
    }).catch(function(err) {
        return Promise.reject(err);
    })
}