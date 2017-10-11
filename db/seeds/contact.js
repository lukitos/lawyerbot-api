
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {
          name: 'John Doe',
          phone: '201-222-2222',
          email: 'jdoe.gmail.com',
          source: 'phone',
          assignedto: 'Shu Sia Lukito',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile1.png'
        },
        {
          name: 'Mary Smith',
          phone: '313-333-3333',
          email: 'msmith.gmail.com',
          source: 'phone',
          assignedto: 'Shu Sia Lukito',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile2.png'
        },
        {
          name: 'Paul Jones',
          phone: '440-444-4444',
          email: 'pjones.gmail.com',
          source: 'email',
          assignedto: 'John Ayers',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile3.png'
        },
        {
          name: 'Ayumi Sato',
          phone: '525-555-5555',
          email: 'asato.gmail.com',
          source: 'email',
          assignedto: 'John Ayers',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile4.png'
        },
        {
          name: 'Jonathan Blair',
          phone: '201-456-2222',
          email: 'jblair.gmail.com',
          source: 'phone',
          assignedto: 'Shu Sia Lukito',
          comments: 'Request initial consultation ASAP',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile5.png'
        },
        {
          name: 'Blake Johansen',
          phone: '564-156-4556',
          email: 'bjohansen.gmail.com',
          source: 'phone',
          assignedto: 'Shu Sia Lukito',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile6.jpg'
        },
        {
          name: 'Samantha Marcus',
          phone: '953-646-3333',
          email: 'smarcus.gmail.com',
          source: 'bot',
          assignedto: 'Shu Sia Lukito',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile7.jpg'
        },
        {
          name: 'Jayasree Singh',
          phone: '945-646-3333',
          email: 'smarcus.gmail.com',
          source: 'bot',
          assignedto: 'Shu Sia Lukito',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile8.jpg'
        },
        {
          name: 'Will Montgomery',
          phone: '643-444-4414',
          email: 'wmontgomery.gmail.com',
          source: 'bot',
          assignedto: 'John Ayers',
          comments: '',
          photourl: 'https://s3.us-east-2.amazonaws.com/g54capstone/profile3.png'
        }
      ]);
    });
};
