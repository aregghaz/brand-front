const timestampToDate = (date) => {
    const year = new Date(date).getFullYear();
    const monthRaw = new Date(date).getMonth();
    const monthFormatted = monthRaw > 8 ? monthRaw + 1 : `0${monthRaw + 1}`;
    const dayRaw = new Date(date).getDate();
    const hours = new Date(date).getHours();
    const minute = new Date(date).getMinutes();
    const getSeconds = new Date(date).getSeconds();
    const day = dayRaw > 9 ? dayRaw : `0${dayRaw}`;
  ///  var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

    var myDate = new Date(`${monthFormatted}/${day}/${year} ${hours}:${minute}:${getSeconds}`) // your date object
    myDate.setHours(myDate.getHours() + 24)
   // console.log(myDate,'4444')
    return myDate;
};

export default timestampToDate;