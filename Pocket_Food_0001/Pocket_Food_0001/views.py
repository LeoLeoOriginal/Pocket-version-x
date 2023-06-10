from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, login, logout
from django.contrib import messages

def home(request):
	if request.user.is_authenticated:
		return render(request, 'Home/home.html')
	else:
		return redirect('sign-in')