// component
import SvgColor from '../../../components/svg-color';
// ----------------------------------------------------------------------

const iconsvg = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: icon('ic_analytics'),
  // },
  {
    title: 'Solicitudes',
    path: '/dashboard/solicitudes',
    icon: iconsvg('ic_document'),
  },
  {
    title: 'Descargas',
    path: '/dashboard/descargas',
    icon:  iconsvg('ic_dowlnload'),
  },
  {
    title: 'Migraciones',
    path: '/dashboard/migraciones',
    icon:  iconsvg('ic_migration'),
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
