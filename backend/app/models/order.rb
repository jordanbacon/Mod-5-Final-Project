class Order < ApplicationRecord
    has_many :bookeditems
    belongs_to :user
    accepts_nested_attributes_for :bookeditems
end
