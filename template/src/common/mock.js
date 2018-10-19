
const mockStatus = {
  status: {
    Switch: 1,
    Switch2: 0
  },
  getStatus: () => {
    return mockStatus.status
  },
  setStatus: (params) => {
    for (var param in params) {
      mockStatus.status[param] = params[param]
    }
  }
}
const mock = {
  open: true,
  mockSDK: () => {
    window._AI = AI
    AI = Object.assign({}, AI, mock.mockApi)
  },
  mockApi: {
    getDeviceStatus: (cb) => {
      setTimeout(() => {
        cb && cb(mock.mockData.getStatusSuccess)
      }, 1000)
    },
    setDeviceStatus: (params) => {
      console.log('[setDeviceStatus]', params)
      setTimeout(() => {
        mockStatus.setStatus(params)
      }, 1000)
    },
    deviceStatusChange: (cb) => {
      setInterval(() => {
        // console.log('[deviceStatusChange]', mock.mockData.getStatusSuccess)
        cb && cb(mock.mockData.getStatusSuccess)
      }, 3000)
    }
  },
  mockData: {
    getStatusSuccess: {
      'success': 'true',
      'model': {
        status: 1, // 0 - 未激活， 1 - 在线， 3 - 离线， 8 - 禁用,
        attr: mockStatus.getStatus(),
        errorInfo: {}
      },
      'msgInfo': '调用成功',
      'msgCode': 'SUCCESS'
    }
  }
}

export default mock
