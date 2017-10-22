require 'test_helper'

class MesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @me = mes(:one)
  end

  test "should get index" do
    get mes_url
    assert_response :success
  end

  test "should get new" do
    get new_me_url
    assert_response :success
  end

  test "should create me" do
    assert_difference('Me.count') do
      post mes_url, params: { me: { about_me: @me.about_me, blogs: @me.blogs, meetings: @me.meetings, name: @me.name, projects: @me.projects, skills: @me.skills, title: @me.title } }
    end

    assert_redirected_to me_url(Me.last)
  end

  test "should show me" do
    get me_url(@me)
    assert_response :success
  end

  test "should get edit" do
    get edit_me_url(@me)
    assert_response :success
  end

  test "should update me" do
    patch me_url(@me), params: { me: { about_me: @me.about_me, blogs: @me.blogs, meetings: @me.meetings, name: @me.name, projects: @me.projects, skills: @me.skills, title: @me.title } }
    assert_redirected_to me_url(@me)
  end

  test "should destroy me" do
    assert_difference('Me.count', -1) do
      delete me_url(@me)
    end

    assert_redirected_to mes_url
  end
end
