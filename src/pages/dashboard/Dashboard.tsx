import { useState } from "react";
import { Header } from "../../components/header/Header";
import "./Dashboard.css";
import { Category } from "../../components/category/Category";

interface Question {
  question: string;
  answer: number;
  type: "input" | "radio";
  options?: Array<{
    label: string;
    value: number;
    factor: number;
  }>;
  factor: number;
}

interface Category {
  category: string;
  questions: Array<Question>;
}

export const Dashboard = () => {
  const [questions, setQuestions] = useState<Array<Category>>([
    {
      category: "Fuel Consumption",
      questions: [
        {
          question: "Enter the amount of petrol consumption",
          type: "input",
          answer: 0,
          factor: 2.34,
        },
        {
          question: "Enter the amount of diesel consumption",
          type: "input",
          answer: 0,
          factor: 2.71,
        },
        {
          question: "Enter the amount of LPG/CNG consumption",
          type: "input",
          answer: 0,
          factor: 2.07,
        },
        {
          question: "Enter the amount of Coal consumption",
          type: "input",
          answer: 0,
          factor: 2.5,
        },
      ],
    },
    {
      category: "Energy Consumption",
      questions: [
        {
          question:
            "Enter the amount of electricity consumed from non-renewable resources",
          type: "input",
          answer: 0,
          factor: 0.708,
        },
      ],
    },
    {
      category: "Travel",
      questions: [
        {
          question: "Enter the distance travelled in Flights ",
          answer: 0,
          type: "input",
          factor: 0.121,
        },
        {
          question: "Enter the distance travelled in Trains ",
          answer: 0,
          type: "input",
          factor: 0.0078,
        },
        {
          question: "Enter the distance travelled in Metro ",
          answer: 0,
          type: "input",
          factor: 0.0139,
        },
        {
          question: "Enter the distance travelled in Bus ",
          answer: 0,
          type: "input",
          factor: 0.054,
        },
        {
          question: "Enter the distance travelled in Electric Bus ",
          answer: 0,
          type: "input",
          factor: 0.03782,
        },
        {
          question: "Enter the distance travelled in Car ",
          answer: 0,
          type: "input",
          factor: 0.1431,
        },
        {
          question: "Enter the distance travelled in Electric Car ",
          answer: 0,
          type: "input",
          factor: 0.1035,
        },
      ],
    },
    {
      category: "Food Habits",
      questions: [
        {
          question: "Please select your meal preference",
          answer: 0,
          type: "radio",
          factor: 0,
          options: [
            {
              label: "Vegan Diet",
              value: 1,
              factor: 2019,
            },
            {
              label: "Vegetarian Diet",
              value: 2,
              factor: 2176,
            },
            {
              label: "Non-Vegetarian Diet - Rarely",
              value: 3,
              factor: 2412,
            },
            {
              label: "Non-Vegetarian Diet - Sometimes",
              value: 4,
              factor: 3017,
            },
            {
              label: "Non-Vegetarian Diet - Regularly",
              value: 5,
              factor: 3781,
            },
          ],
        },
      ],
    },
  ]);

  const [finalAnswer, setFinalAnswer] = useState<{
    isCalculationDone: boolean;
    answer: number;
  }>({
    isCalculationDone: false,
    answer: 0,
  });

  const [currentCategoryDetails, setCurrentCategoryDetails] =
    useState<number>(0);

  // const setAnswerToQuestion = ({
  //   questionIndex,
  //   answer,
  // }: {
  //   questionIndex: number;
  //   answer: number;
  // }) => {
  //   setQuestions(
  //     questions.map((category, index) => {
  //       if (index == currentCategoryDetails) {
  //         return {
  //           ...category,
  //           questions: category.questions.map((question, qIndex) => {
  //             if (qIndex == questionIndex) {
  //               return { ...question, answer };
  //             }
  //             return { ...question };
  //           }),
  //         };
  //       }
  //       return category;
  //     })
  //   );
  // };

  const onNext = () => {
    setCurrentCategoryDetails(currentCategoryDetails + 1);
  };

  const setCategoryAnswers = (categoryWithAnswers: Category) => {
    setQuestions((currQuestions) => {
      return currQuestions.map((question, index) => {
        if (index == currentCategoryDetails) {
          return { ...categoryWithAnswers };
        }
        return { ...question };
      });
    });
  };

  const onSubmit = () => {
    let ans = 0;
    questions.forEach((category) => {
      category.questions.forEach((each) => {
        if (each.type == "input") {
          ans = ans + each.answer * each.factor;
        } else if (each.type == "radio") {
          if (each.options && each.options.length) {
            each.options.forEach((option) => {
              if (option.value == each.answer) {
                ans = ans + option.factor;
              }
            });
          }
        }
      });
    });

    setFinalAnswer({
      isCalculationDone: true,
      answer: ans,
    });
  };

  return (
    <>
      <Header />
      {!finalAnswer.isCalculationDone ? (
        <>
          <div className="question_container">
            <Category
              category={questions[currentCategoryDetails]}
              setCategoryAnswers={setCategoryAnswers}
            />
            {currentCategoryDetails < questions.length - 1 ? (
              <>
                <div className="submit_button" onClick={onNext}>
                  Next
                </div>
              </>
            ) : (
              <>
                <div className="submit_button" onClick={onSubmit}>
                  Submit
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="calculation_container">
            <div className="title_box"> Your estimated carbon footprint</div>
            <div className="emission_box"> {finalAnswer.answer.toFixed(2)} </div>
            <div className="footer_title_box">Total CO<sub>2</sub> emission in Kgs</div>
          </div>
        </>
      )}
    </>
  );
};
