require "rails_helper"
RSpec.describe Question, :type => :model do
  
  before(:all) do
    @question1 = create(:question)
  end
  
  it "is valid with valid attributes" do
    expect(@question1).to be_valid
  end
  
  it "has a unique question content" do
    question2 = build(:question, content: "Who am I?")
    expect(question2).to_not be_valid
  end
  
  it "is not valid without a question content" do 
    question2 = build(:question, content: nil)
    expect(question2).to_not be_valid
  end
  
  it "is not valid without a question answer" do 
    question2 = build(:question, answer: nil)
    expect(question2).to_not be_valid
  end

end