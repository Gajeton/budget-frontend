import CardMonthItem from "./CardMonthItem";

interface CardMonthProps {
    data: any
    months: number
}

const CardMonth = () => {

    const getMonths = (months: number) => {
      let content = [];
      const monthsList = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      let indexMonth = 0
      for (let i = 0; i < months; i++) {
        if(indexMonth === 11) {
          indexMonth = 0
        }
        content.push(<CardMonthItem keyItem={'dw'} title={monthsList[indexMonth]} />);
        indexMonth++
      }
      return content;
    };


    return (
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2">
          {getMonths(10)}
        </div>
        <div className="my-4"></div>
      </div>
    );
};

export default CardMonth