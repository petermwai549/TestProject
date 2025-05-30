<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Tenant;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {   
        // dd(tenant('id'));
        return Inertia::render('Auth/Register'
        //,['tenant'=> tenant('id')]
        );
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        // event(new Registered($user));

        // Auth::login($user);

        // return redirect(route('dashboard', absolute: false));

        // Get the current tenant's ID and switch to the tenant's database
        $tenantId = tenant('id');  // Assuming you use tenant ident
        // dd($tenantId);
        if ($tenantId) {
            $tenant = Tenant::find(['id' => $tenantId])->first();

            $tenant->run(function () use($request) {
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password)
                ]);
                // $role_user = Role::findByName('User');
                // $user->assignRole($role_user);

                event(new Registered($user));

                Auth::login($user);
            });
        }else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // $role_user = Role::findByName('User');
            // $user->assignRole($role_user);
            event(new Registered($user));

            Auth::login($user);
        }
        return (tenant('id'))? redirect(route('tenant.dashboard', absolute: false)) : redirect(route('dashboard', absolute: false));
    }
}
