class Question < ApplicationRecord
	validates :content, presence: true, uniqueness: true
	validates :answer, presence: true
end
