class BookedItemsController < ApplicationController

    def create
        bookeditem = BookedItem.create(booked_params)
        render json: education
    end
    
    def index
        render json: BookedItem.all
    end
    
    
    def booked_params
        params.permit(:name, :img_url, :description, :price, :quantity, :classification, :order_id)
    end
    
    # def define_current_purchase
    #     if params[:id]
    #         @booked_params = BookedItem.find(params[:id])
    #     else
    #         @booked_params = BookedItem.new
    #     end
    # end
    
    # def booked_params
    #     @booked_params
    # end



end
