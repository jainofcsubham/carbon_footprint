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

const staticQuestions: Array<Category> = [
  {
    category : "",
    questions:[
      {
        question: "Please choose period of calculation",
        answer: -1,
        type: "radio",
        factor: 0,
        options: [
          {
            label: "Yearly",
            value: 0,
            factor: 0,
          },
          {
            label: "Monthly",
            value: 1,
            factor: 0,
          },]
      }
    ]
  },
  {
    category: "Fuel Consumption",
    questions: [
      {
        question: "Enter the amount of petrol consumption(kg)",
        type: "input",
        answer: 0,
        factor: 2.34,
      },
      {
        question: "Enter the amount of diesel consumption(kg)",
        type: "input",
        answer: 0,
        factor: 2.71,
      },
      {
        question: "Enter the amount of LPG/CNG consumption(kg/litre)",
        type: "input",
        answer: 0,
        factor: 2.07,
      },
      {
        question: "Enter the amount of Coal consumption(kg)",
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
          "Enter the amount of electricity consumed from non-renewable resources(kwh)",
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
        question: "Enter the distance travelled in Flights(km) ",
        answer: 0,
        type: "input",
        factor: 0.121,
      },
      {
        question: "Enter the distance travelled in Trains(km) ",
        answer: 0,
        type: "input",
        factor: 0.0078,
      },
      {
        question: "Enter the distance travelled in Metro(km)",
        answer: 0,
        type: "input",
        factor: 0.0139,
      },
      {
        question: "Enter the distance travelled in Bus(km)",
        answer: 0,
        type: "input",
        factor: 0.054,
      },
      {
        question: "Enter the distance travelled in Electric Bus(km)",
        answer: 0,
        type: "input",
        factor: 0.03782,
      },
      {
        question: "Enter the distance travelled in Car(km)",
        answer: 0,
        type: "input",
        factor: 0.1431,
      },
      {
        question: "Enter the distance travelled in Electric Car(km)",
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
        question: "Please choose your meal preference",
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
];

export const Dashboard = () => {
  const [questions, setQuestions] = useState<Array<Category>>(staticQuestions);

  const [finalAnswer, setFinalAnswer] = useState<{
    isCalculationDone: boolean;
    answer: number;
  }>({
    isCalculationDone: false,
    answer: 0,
  });

  const [currentCategoryDetails, setCurrentCategoryDetails] =
    useState<number>(0);

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
        }else if (each.type == "radio" && category.category == "Food Habits") {
          if (each.options && each.options.length) {
            let dividingFactor = questions[0].questions[0].answer == 0 ? 1 : 12;
            each.options.forEach((option) => {
              if (option.value == each.answer) {
                ans = ans + (option.factor/dividingFactor);
              }
            });
          }
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

  const onBack = () => {
    setCurrentCategoryDetails(currentCategoryDetails - 1);
  };

  const reCalculate = () => {
    setQuestions(staticQuestions);
    setCurrentCategoryDetails(0);
    setFinalAnswer({
      isCalculationDone: false,
      answer: 0.0,
    });
  };

  return (
    <>
      <div className="page_wrapper">
        <Header />
        {!finalAnswer.isCalculationDone ? (
          <>
            <div className="question_container">
              <div className="category_title">
                {questions[currentCategoryDetails].category}
              </div>
              <div className="form_container">
                <Category
                  category={questions[currentCategoryDetails]}
                  setCategoryAnswers={setCategoryAnswers}
                />
              </div>
              <div className="question_footer">
                <div className="footer_disclaimer">
                  {
                    currentCategoryDetails != 0 ? <>**Please enter details based on {questions[0].questions[0].answer == 0 ? "yearly" : "monthly"} consumption.**</> : <></>
                  }
                </div>
                <div className="action_item_container">
                  {currentCategoryDetails != 0 ? (
                    <button className="back_button" onClick={onBack}>
                      Back
                    </button>
                  ) : (
                    <></>
                  )}

                  {currentCategoryDetails < questions.length - 1 ? (
                    <>
                      <button className="submit_button" onClick={onNext}>
                        Next
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="submit_button" onClick={onSubmit}>
                        Submit
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="calculation_container">
              <div className="title_box"> Your estimated {questions[0].questions[0].answer == 0 ? "yearly" : "monthly"} carbon footprint</div>
              <div className="emission_box">
                {" "}
                {finalAnswer.answer.toFixed(2)}{" "}
              </div>
              <div className="footer_title_box">
                Total CO<sub>2</sub> emission in Kgs
              </div>
              <button className="re_calculate_button" onClick={reCalculate}>Re-calculate</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
