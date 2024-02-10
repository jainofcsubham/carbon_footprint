import { Header } from "../../components/header/Header";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Calculator } from "../calculator/Calculator";

export const Dashboard = () => {
  return (
    <>
      <div className="page_wrapper">
        <Header isLoggedIn />

        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/groups" element={<Calculator />} />
        </Routes>

        {/* {!finalAnswer.isCalculationDone ? (
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
                  {currentCategoryDetails != 0 ? (
                    <>
                      **Please enter details based on{" "}
                      {questions[0].questions[0].answer == 0
                        ? "yearly"
                        : "monthly"}{" "}
                      consumption.**
                    </>
                  ) : (
                    <></>
                  )}
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
              <div className="title_box">
                {" "}
                Your estimated{" "}
                {questions[0].questions[0].answer == 0
                  ? "yearly"
                  : "monthly"}{" "}
                carbon footprint
              </div>
              <div className="emission_box">
                {" "}
                {finalAnswer.answer.toFixed(2)}{" "}
              </div>
              <div className="footer_title_box">
                Total CO<sub>2</sub> emission in Kgs
              </div>
              <button className="re_calculate_button" onClick={reCalculate}>
                Re-calculate
              </button>
            </div>
          </>
        )} */}
      </div>
    </>
  );
};
