import Card from './components/Card';

const users = [
  {
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
    name: "Doe",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    active: true,
    education: {
      primary: 'SRI Seremban',
      secondary: 'SMKA Sheikh Hj Mohd Said',
      tertiary: 'Universiti Malaya',
    }
  },
];

function App() {
  return (
    <>
      {/* <Card user={users[0]} />
      <Card user={users[1]} />
      <Card user={users[2]} /> */}
      {
        users.map((user) => {
          return <Card user={user} />;
        })
      }
    </>
  )
}

export default App;
