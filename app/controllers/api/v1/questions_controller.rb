class Api::V1::QuestionsController < Api::V1::BaseController
  def index
    respond_with Question.all
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
