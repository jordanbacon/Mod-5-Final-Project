class Api::V1::OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders, include: :bookeditems
    end

    def show
        @order = Order.find(params[:id])
        render json: @order, include: :bookeditems
    end

    def create
        # byebug
        @order = Order.create(order_params)
        render json: @order, status: 201
    end

    def update
        @order = Order.find(params[:id])
        @order.update(order_params)
        render json: @order, status: 201
    end
    
    def destroy
        @order = Order.find(params[:id])
        @order.destroy
    end

    private

    def order_params
        params.require(:order).permit(:user_id, bookeditems_attributes: [:id, :name, :img_url, :description, :price, :quantity, :classification, :order_id])
    end

end
