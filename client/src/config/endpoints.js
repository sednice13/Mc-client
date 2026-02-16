const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ''

export const AUTH_BASE_URL = `${API_BASE_URL}/api/auth`
export const MC_SOCKET_URL = process.env.REACT_APP_MC_SOCKET_URL || API_BASE_URL || window.location.origin
