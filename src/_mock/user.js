import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
  'Juan Ruiz',
  'Horacio ramirez',
  'Luis Perez',
  'Daniel Roman',
  'Valentina Ocampo',
  'Stiven Naranjo',
  'Santiago Brand',
  'Angie Saenz',
  'Luisa Cardona',
  'Pedro Gutierrez',]),
  company: sample([
    'Calle 52 # 20-25',
    'Calle 12sur # 42-55',
    'Calle 69 # 58-89',
    'Calle 32sur # 45-86',
    'Cale 68sur # 43a-65',]),
  isVerified: faker.datatype.boolean(),
  status: sample(['activo', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
