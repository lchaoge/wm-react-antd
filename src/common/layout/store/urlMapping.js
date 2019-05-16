const UrlMapping = {
  isLocalHost: false,
  origin: window.location.origin
}


export const POST_GET_MENULIST = (UrlMapping.isLocalHost ? '/wmWorkwebApp/operplat/apis' : this.origin) + '/api/menuList.json'; // 初始化菜单

