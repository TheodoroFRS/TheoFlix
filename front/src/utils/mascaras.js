// Formatar para input
export const formatarData = (data) => {

  // const dataFormat = new Date(data);

  // const options = {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric"
  // }

  // const dataForFormat = dataFormat.toLocaleDateString("pt-br", options);

  // const [dia, mes, ano] = dataForFormat.split("/")

  //return `${ano}-${mes}-${dia}`

  const [ano, mes, dia] = data.split('-');

  return `${dia}/${mes}/${ano} `
}



// export const formatarData = (data) => {
//   const [ano, mes, resto] = data.split('-')
//   const [dia, ] = resto.split('T')
  
//   return `${dia}/${mes}/${ano}`

// }


