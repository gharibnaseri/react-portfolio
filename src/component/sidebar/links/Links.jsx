

function links() {

  const items=[
    'HomePage',
    'skills',
    'Projects',
    'contacts',
  ]
  return (
    <div className="links">{items.map((item)=>(
      <a href={`#${item}`} key={item}>{item}</a>

    ))}</div>
  )
}

export default links