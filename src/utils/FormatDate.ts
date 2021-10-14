const FormatDate = (date: string) => {
  
    return {
        day: new Date(date).toLocaleDateString("pt-BR", {day: "numeric"}),
        month: new Date(date).toLocaleDateString("pt-BR", {month: "long"}),
        // year: new Date(date).toLocaleDateString("pt-BR", {year: "numeric"} )
        year: new Date(date).getFullYear()
    }
};

export default FormatDate;
