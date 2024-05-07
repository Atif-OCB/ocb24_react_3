import Card from './components/Card';

const users = [
  {
    id: 1,
    name: "Atif",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    id: 2,
    name: "John",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: false,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    id: 3,
    name: "Doe",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    id: 4,
    name: "Jane",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: false,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    id: 5,
    name: "Smith",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
  {
    id: 6,
    name: "Ali",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: false,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  }
];

function App() {
  return (
    <>
      {
        users.map((user) => {
          return <Card user={user} hidden={user.active === true} key={user.id}  />;
        })
      }
    </>
  )
}

export default App;
