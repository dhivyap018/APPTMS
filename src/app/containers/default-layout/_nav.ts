import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
     name: 'Appartment',
     url: '/appartment1',
     iconComponent: { name:'cil-drop' },  
  
   
    children: [

       {
        name: 'users',
        url: '/appartment1/user-details',
        iconComponent:{name:'cil-drop'},
      },  
      {
        name:'Flat',
        url:'/appartment1/flatdetails',
        iconComponent:{name:'cil-drop'},
      },
      // {
      //   name:'Image',
      //   url:'/appartment1/image',
      //   iconComponent:{name:'cil-drop'}
      // },
      
      // {
      //   name:'add',
      //   url:'/appartment1/adduser',
      //   iconComponent:{name:'cil-drop'}
      // },
      // {
      //   name:'paylist',
      //   url:'/appartment1/paymode',
      //   iconComponent:{name:'cil-drop'}
      // },
      // {
      //   name:'payment',
      //   url:'/appartment1/payment',
      //   iconComponent:{name:'cil-drop'}
      // },
       {
        name:'payment',
         url:'/appartment1/paymode',
         iconComponent:{name:'cil-drop'}
       },
       {
         name:'Invoice',
         url:'/appartment1/invoice-list',
         iconComponent:{name:'cil-drop'}
       },
        {
         name:'Demo',
    url:'/appartment1/userdeit',
         iconComponent:{name:'cil-drop'}
       },
      // {
      //   name:'viewinvoice',
      //   url:'/appartment1/viewinvoice',
      //   iconComponent:{name:'cil-drop'}  
      // },
      //  {
      //    name:'viewreciept',
      //  url:'/appartment1/viewreciept',
      //    iconComponent:{name:'cil-drop'}  
      //  }
    
      // {
      //   name:'phonenumber',
      //   url:'/pages/phonenumber',
      //   iconComponent:{name:'cil-drop'}
      // },
    ]
  
  },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  
  
 
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
    
  
  
      
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'ForgotPassword',
  //       url: '/forgotpassword'
  //     },
  //     {
  //       name: 'verifycode',
  //       url: '/verifycode'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //    
   
  {
    name: 'Tenant',
    url: '/tenant',
    iconComponent: { name:'cil-drop' },  
  
  children: [
    {
             name: 'profile',
            url: '/tenant/profile',
            iconComponent:{name:'cil-drop'},
          },  
  
  ]
      }    ]
  
  

          