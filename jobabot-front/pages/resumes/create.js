const create = props => {
  return <h1>Create New Resume {props.email}</h1>
}

export default create

export async function getServerSideProps () {
  const data = await import('/data/data.json')
  //const res = await fetch('url';
  //cons data = await res.json();
  console.log(data)
  return {
    props: {
      data
    }
  }
}
