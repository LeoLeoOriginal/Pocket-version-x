from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, login, logout
from django.contrib import messages

def signInView(request):
	if (request.method == "POST"):
		userN = request.POST.get('username',False)
		passW = request.POST.get('password',False)
		user = authenticate(request,username=userN, password=passW)
		if user is not None:
			login(request, user)
			messages.success(request, 'Succesfully Logged In')
			return redirect('home')
		else:
			messages.error(request, 'There was an error loggin in, try again')
			return redirect('sign-in')
	else:
		context = {}
		return render(request, 'SignIn/signIn.html', context)