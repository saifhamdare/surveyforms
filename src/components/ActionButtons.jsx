import React from 'react';
import { btnValidator } from '../utils/helpers';

const ActionButtons = ({
  setCheck,
  setQuestionCount,
  onSubmit,
  mandatory,
  questionCount,
  objName,
  loading,
  finishNo,
}) => {
  let keysArr = Object.keys(objName);
  console.log(questionCount);

  const btnClasses =
    questionCount !== 1
      ? 'border-2 border-sky-600 px-3 py-1 rounded-lg text-sky-600 font-medium'
      : 'border-2 border-gray-400 px-3 py-1 rounded-lg text-gray-400 font-medium';
      
  return (
    <>
      <div className='footer text-center m-5 mt-10 flex justify-around'>
        <button
          className={btnClasses}
          disabled={questionCount == 1}

          onClick={() => {
            setQuestionCount(currentPage => currentPage - 1);
            setCheck(false);
          }}
        >
          Previous
        </button>

        {questionCount === finishNo ? (
          <button
            className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
            onClick={onSubmit}
          >
            Finish{' '}
            {loading && (
              <i className='fa-solid fa-lg fa-spinner fa-spin-pulse'></i>
            )}
          </button>
        ) : mandatory.includes(questionCount) ? (
          btnValidator(objName, keysArr, questionCount) ? (
            <>
              <button
                className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
                onClick={() => {
                  setQuestionCount(currentPage => currentPage + 1);
                  setCheck(false);
                }}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <button
                className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
                onClick={() => {
                  setCheck(true);
                }}
              >
                Next
              </button>
            </>
          )
        ) : (
          <>
            <button
              className='border-2 border-sky-600 bg-sky-700 px-5 py-2 rounded-lg text-white font-medium'
              onClick={() => {
                setQuestionCount(currentPage => currentPage + 1);
                setCheck(false);
              }}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ActionButtons;
