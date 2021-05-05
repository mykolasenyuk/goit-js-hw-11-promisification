const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((onSuccess, onError) => {
        setTimeout(() => {
    const canProcess = Math.random() > 0.3;

    if (canProcess) {
        onSuccess({id: transaction.id, time: delay });
    } else {
      onError(transaction.id);
    }
  }, delay);
        
    })
  
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction 🆔 ${id} processed in 🕗 ${time}ms`);
};

const logError = id => {
  console.log(`Error processing transaction 🆔 ${id}. Please try again later.`);
};



const task3Btn = document.querySelector('.task3');

const onTask3 = () => {
  makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);

}
task3Btn.addEventListener('click', onTask3);


