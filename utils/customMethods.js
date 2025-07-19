export async function getRequest(request, endpoint) {
    return await request.get(endpoint);
}
export async function postRequest(request, endpoint, data = {}) {
    return await request.post(endpoint, {
        data: JSON.stringify(data)
    });
}
export async function putRequest(request, endpoint, data = {}) {
    return await request.put(endpoint, {
        data: JSON.stringify(data)
    });
}
export async function deleteRequest(request, endpoint) {
    return await request.delete(endpoint)
}
export async function patchRequest(request, endpoint, data = {}) {
    return await request.patch(endpoint, {
        data: JSON.stringify(data)
    });
}