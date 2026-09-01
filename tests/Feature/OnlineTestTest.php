<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class OnlineTestTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_from_the_online_test(): void
    {
        $this->get('/online-test')->assertRedirect('/login');
    }

    public function test_authenticated_users_can_visit_the_online_test(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/online-test')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('online-test'));
    }
}
