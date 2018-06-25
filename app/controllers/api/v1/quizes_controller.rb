class Api::V1::QuizesController < Api::V1::BaseController
  def index
    offset = rand(Question.count)
    random_question = Question.offset(offset).first
    respond_with random_question.blank? ? [] : random_question
  end

  def create
    respond_with :api, :v1, Question.create(question_params)
  end

  def destroy
    respond_with Question.destroy(params[:id])
  end

  def update
    question = Question.find(params["id"])
    question.update_attributes(question_params)
    respond_with question, json: question
  end

  def search
    query = params[:query]
    questions = Question.where("content ILIKE ? OR answer ILIKE ?", "%#{query}%", "%#{query}%")
    render json: questions
  end

  private

  def question_params
    params.require(:question).permit(:id, :content, :answer)
  end
end
