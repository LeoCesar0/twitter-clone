


const Capitalize = (string: string) => {
   return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}


export default Capitalize