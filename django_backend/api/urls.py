from django.urls import path
from .views import GetSelfView, NodeView, MySQLView, WebsiteView, NodeDetailView, MySQLDetailView, WebsiteDetailView

urlpatterns = [
  path("node", NodeView.as_view()),
  path("mysql", MySQLView.as_view()),
  path("websites", WebsiteView.as_view()),
  path("node/<int:pk>", NodeDetailView.as_view()),
  path("mysql/<int:pk>", MySQLDetailView.as_view()),
  path("websites/<int:pk>", WebsiteDetailView.as_view()),
	path("self", GetSelfView.as_view())
]

