import Building from './models/Building';
import Conference from './models/Conference';
import Contribution from './models/Contribution';
import Event from './models/Event';
import New from './models/New';
import Review from './models/Review';
import Room from './models/Room';
import Sponsor from './models/Sponsor';
import User from './models/User';

const buildingA = {
  name: 'A',
  startTime: new Date().setHours(0, 0, 0),
  endTime: new Date().setHours(24, 60, 60),
  address: 'Edificio A UPAEP Barrio de Santiago Puebla, Pue.',
  coordinates: '19.0482381,-98.2174621',
  wifi: {
    name: 'AWifi',
    password: '12345'
  },
  parking: false
};

const users = [
  {
    firstName: 'test',
    lastName: 'admin',
    email: 'test@test.com',
    activated: true,
    birthDate: new Date().setFullYear(1993, 3, 25),
    country: 'Mexico',
    company: 'UPAEP',
    institution: 'UPAEP',
    permissions: {
      name: 'ADMIN'
    }
  },
  {
    firstName: 'test',
    lastName: 'organizer',
    email: 'test@test.com',
    activated: true,
    birthDate: new Date().setFullYear(1993, 2, 25),
    country: 'Mexico',
    company: 'UPAEP',
    institution: 'UPAEP',
    permissions: {
      name: 'ORGANIZER'
    }
  },
  {
    firstName: 'test',
    lastName: 'speaker',
    email: 'test@test.com',
    activated: true,
    birthDate: new Date().setFullYear(1993, 2, 25),
    country: 'Mexico',
    company: 'UPAEP',
    institution: 'UPAEP',
    permissions: {
      name: 'SPEAKER'
    }
  },
  {
    firstName: 'test',
    lastName: 'attendant',
    email: 'test@test.com',
    activated: true,
    birthDate: new Date().setFullYear(1993, 2, 25),
    country: 'Mexico',
    company: 'UPAEP',
    institution: 'UPAEP',
    permissions: {
      name: 'ATTENDANT'
    }
  }
];

const event = {
  name: 'CONISOFT 2018',
  startDate: new Date().setFullYear(2018, 2, 20),
  endDate: new Date().setFullYear(2018, 2, 25),
  lastDateContributions: new Date().setFullYear(2018, 2, 15),
  description: 'CONGERESO NACIONAL DE INGENIERIA DE SOFTWARE 2018',
  needsPayment: true,
  arrivalInformation: 'Los hoteles recomendados:...',
  site: 'www.conisoft.com'
};

const news = [
  {
    title: 'El inicio',
    date: new Date(),
    content: 'Lorem ipsum'
  },
  {
    title: 'El final',
    date: new Date(),
    content: 'Lorem ipsum'
  }
];


const sponsor = {
  name: 'Coca-cola'
};

const roomA = {
  name: 'Room a',
  openHour: new Date().setHours(7, 0, 0),
  closedHour: new Date().setHours(18, 0, 0),
  seats: 30,
  typeOfRoom: 'CLASSROOM',
  floor: 2
};

/**
* @function ec => empty collection
*/
function ec(model) {
  model.collection.drop();
}

async function fakeDb() {
  ec(Building);
  const bA = await Building.create(buildingA);
  ec(Room);
  const rA = new Room(roomA);
  rA.building = bA;
  await rA.save();
  bA.rooms.push(rA);
  await bA.save();

  ec(User);
  const newUsers = await Promise.all(users.map(u => User.create(u)));

  ec(Sponsor);
  const sp = await Sponsor.create(sponsor);

  ec(Event);
  const newEvent = new Event(event);
  newEvent.organizers.push(newUsers[1]);
  newEvent.speakers.push(newUsers[2]);
  newEvent.sponsors.push(sp);
  await newEvent.save();
  sp.events.push({
    event: newEvent,
    level: 'GOLDEN'
  });
  await sp.save();

  ec(New);
  const newNews = await Promise.all(news.map(n => New.create(n)));
  newEvent.news = newNews;
  await newEvent.save();
}

module.exports = fakeDb;
